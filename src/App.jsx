import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRttBXqF9FCzXJmHObf_NM8ZhDm6LvkXo",
  authDomain: "lab-qc-report.firebaseapp.com",
  projectId: "lab-qc-report",
  storageBucket: "lab-qc-report.firebasestorage.app",
  messagingSenderId: "134442614684",
  appId: "1:134442614684:web:4a68ec0458957e07dc9259"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function App() {
  useEffect(() => {
    signInAnonymously(auth);
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>분자유전검사실 정도관리 시스템</h1>
      <p>성공적으로 연결되었습니다! 이제 이 시스템을 통해 데이터를 안전하게 관리하세요.</p>
    </div>
  );
}
