import { initializeApp } from "firebase/app"
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { toast } from 'react-toastify';
import _isEmpty from 'lodash/isEmpty'

import firebaseConfig from '../firebase'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);

export const newUserRegister = async (parametersObj, extraData) => {
  const { name, email, password, isAdmin } = parametersObj
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      isAdmin: isAdmin
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
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  let isUserAdmin = false
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    isUserAdmin = doc.data().isAdmin
  });

  try {
    signInWithEmailAndPassword(auth, email, password)
      .then((signInResponse) => {
         let  updatedSignInResponse = { ...signInResponse, isAdmin: isUserAdmin}
        if (!_isEmpty(extraData)) {
          extraData.callBackFunc(updatedSignInResponse)
        }
      })
      .catch((signInError) => {
        toast('Email / password is not valid')
      })
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const updateUserDetailToFirebase = (updatedUserDetails) => {
  updateProfile(auth.currentUser, {
    photoURL: "https://example.com/jane-q-user/profile.jpg",
    email: updatedUserDetails.email,
    name: updatedUserDetails.name
  }).then((updateDetailResponse) => {
    // Profile updated!
    // ...
  }).catch((updateDetailError) => {
    // An error occurred
    console.log('updateDetailError', updateDetailError)
  });
};

export const logout = () => {
  signOut(auth);
};