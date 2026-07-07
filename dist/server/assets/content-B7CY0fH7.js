import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc, writeBatch } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//#region src/lib/firebase.ts
var appInstance = null;
var dbInstance = null;
var authInstance = null;
function getFirebaseConfig() {
	return {
		apiKey: "AIzaSyCDhzx_0O3v0yznML4I05MHQh_dD3nQRms",
		authDomain: "pxldev-csm.firebaseapp.com",
		projectId: "pxldev-csm",
		storageBucket: "pxldev-csm.firebasestorage.app",
		messagingSenderId: "800190389656",
		appId: "1:800190389656:web:abdc9d1d9da69c040b5fed"
	};
}
function initFirebase() {
	if (appInstance) return;
	if (typeof window === "undefined") {
		console.warn("Firebase: skipping init on server.");
		return;
	}
	const config = getFirebaseConfig();
	if (!config.apiKey) {
		console.error("Firebase API key is missing. Check your .env file.");
		return;
	}
	try {
		appInstance = (getApps().length > 0 ? getApp() : null) || initializeApp(config);
		dbInstance = getFirestore(appInstance);
		authInstance = getAuth(appInstance);
		console.log("Firebase initialized successfully.");
	} catch (e) {
		console.error("Firebase init error:", e);
	}
}
function getDb() {
	initFirebase();
	if (!dbInstance) throw new Error("Firestore not initialized. Check your .env and network.");
	return dbInstance;
}
function getAuth$1() {
	initFirebase();
	if (!authInstance) throw new Error("Firebase Auth not initialized.");
	return authInstance;
}
//#endregion
//#region src/lib/content.ts
async function getContent(type) {
	return (await getDocs(collection(getDb(), "content"))).docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	})).filter((item) => item.type === type).sort((a, b) => {
		return (a.order ?? a.createdAt) - (b.order ?? b.createdAt);
	});
}
async function createContentItem(type, data) {
	const db = getDb();
	const existing = await getContent(type);
	if (existing.length > 0) {
		const batch = writeBatch(db);
		existing.forEach((item) => {
			const ref = doc(db, "content", item.id);
			const newOrder = (item.order ?? 0) + 1;
			batch.update(ref, { order: newOrder });
		});
		await batch.commit();
	}
	const newItem = {
		type,
		data,
		order: 0,
		createdAt: Date.now(),
		updatedAt: Date.now()
	};
	return (await addDoc(collection(db, "content"), newItem)).id;
}
async function updateContentItem(id, data) {
	await updateDoc(doc(getDb(), "content", id), {
		data,
		updatedAt: Date.now()
	});
}
async function deleteContentItem(id) {
	await deleteDoc(doc(getDb(), "content", id));
}
async function reorderContentItems(type, orderedIds) {
	const db = getDb();
	const batch = writeBatch(db);
	orderedIds.forEach((id, index) => {
		const ref = doc(db, "content", id);
		batch.update(ref, { order: index });
	});
	await batch.commit();
}
async function getMusicPlaylistOrder() {
	const ref = doc(getDb(), "config", "playlistOrder");
	try {
		const snap = await getDoc(ref);
		if (snap.exists()) return snap.data().music || [];
	} catch (e) {
		console.warn("Failed to fetch playlist order:", e);
	}
	return [];
}
async function setMusicPlaylistOrder(playlists) {
	await setDoc(doc(getDb(), "config", "playlistOrder"), { music: playlists }, { merge: true });
}
async function incrementLikes(id) {
	const ref = doc(getDb(), "content", id);
	const snap = await getDoc(ref);
	if (!snap.exists()) throw new Error("Item not found");
	const newLikes = (snap.data().data?.likes || 0) + 1;
	await updateDoc(ref, { "data.likes": newLikes });
	return newLikes;
}
async function decrementLikes(id) {
	const ref = doc(getDb(), "content", id);
	const snap = await getDoc(ref);
	if (!snap.exists()) throw new Error("Item not found");
	const currentLikes = snap.data().data?.likes || 0;
	const newLikes = Math.max(0, currentLikes - 1);
	await updateDoc(ref, { "data.likes": newLikes });
	return newLikes;
}
async function getNewsPosts() {
	return (await getContent("news")).map((item) => ({
		id: item.id,
		...item.data
	}));
}
async function getMusicTracks() {
	return (await getContent("music")).map((item) => ({
		id: item.id,
		...item.data
	}));
}
async function getGameShots() {
	return (await getContent("games")).map((item) => ({
		id: item.id,
		...item.data
	}));
}
async function getVoiceVideos() {
	return (await getContent("voice")).filter((item) => item.data.type === "video").map((item) => ({
		id: item.id,
		...item.data
	}));
}
async function getVoiceClips() {
	return (await getContent("voice")).filter((item) => item.data.type === "clip").map((item) => ({
		id: item.id,
		...item.data
	}));
}
//#endregion
export { getGameShots as a, getNewsPosts as c, incrementLikes as d, reorderContentItems as f, getAuth$1 as h, getContent as i, getVoiceClips as l, updateContentItem as m, decrementLikes as n, getMusicPlaylistOrder as o, setMusicPlaylistOrder as p, deleteContentItem as r, getMusicTracks as s, createContentItem as t, getVoiceVideos as u };
