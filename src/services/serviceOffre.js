
import Axios from "./otherService";
const useOffre = () => {
    //Creer une fonction recupere la liste des utilisateurs
    const getAllOffres = async () => {
        const offres = await Axios.get('/offre')
        // console.log('LA liste', etudiants.data.data)
        return offres.data
    }
    const getOffresByEnchereId = async (id) => {
        const offres = await Axios.get(`/offre/enchere/${id}`)
        // console.log('LA liste', etudiants.data.data)
        return offres.data
    }
    const deleteOffre = async (id) => {
        await Axios.delete(`/offre/${id}`)
    }

    const getOffreById = async (id) => {
        const offre = await Axios.get(`/offre/${id}`)
        return offre.data
    }
    const createOffre = async (id,offre) => {
        await Axios.post(`/offre/${id}`, offre)

    }

    const updateOffre = async (id, offre) => {
        await Axios.put(`/offre/${id}`, offre)

    }

    return { getAllOffres, deleteOffre, getOffreById, createOffre,updateOffre,getOffresByEnchereId }
}

export default useOffre