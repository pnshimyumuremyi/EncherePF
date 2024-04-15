import axios from "axios";
import Axios from "./otherService";

const useUtilisateur = () => {
    async function login(user) {
        const resultat = await Axios.post('/utilisateur/login',user)
        return resultat.data
    }

    //Creer une fonction recupere la liste des utilisateurs
    const getAllUtilisateurs = async () => {
        const utilisateurs = await Axios.get('/utilisateur')
        return utilisateurs.data
    }
    const deleteUtilisateur = async (id) => {
        await Axios.delete(`/utilisateur/${id}`)
    }

    const getUtilisateurById = async (id) => {
        const utilisateur = await Axios.get(`/utilisateur/${id}`)
        return utilisateur.data
    }
    const createUtilisateur = async (utilisateur) => {
        await Axios.post('/utilisateur', utilisateur)

    }

    const updateUtilisateur = async (id, utilisateur) => {
        await Axios.put(`/utilisateur/${id}`, utilisateur)

    }

    return { login,getAllUtilisateurs, deleteUtilisateur, getUtilisateurById, createUtilisateur,updateUtilisateur }
}

export default useUtilisateur