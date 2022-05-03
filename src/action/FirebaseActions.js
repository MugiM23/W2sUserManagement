import { initializeApp } from "firebase/app"
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify';
import _isEmpty from 'lodash/isEmpty'

import firebaseConfig from '../firebase'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);

export const newUserRegister = async (parametersObj, extraData) => {
  const { name, email, password } = parametersObj
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    if (!_isEmpty(extraData)) {
      extraData.callbackFunc(user)
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const loginUser = async (parametersObj, extraData) => {
  const { email, password } = parametersObj
  try {
    signInWithEmailAndPassword(auth, email, password)
      .then((signInResponse) => {
        if (!_isEmpty(extraData)) {
          extraData.callBackFunc(signInResponse)
        }
      })
      .catch((signInError) => {
        console.log('signInError', signInError)
        toast('Email / password is not valid')
      })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const GetUserDetails = async () => {

};

export const logout = () => {
  signOut(auth);
};