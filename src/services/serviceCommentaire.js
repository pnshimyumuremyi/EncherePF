import Axios from "./otherService"

const useCommentaire = () => {
    //Creer une fonction recupere la liste des utilisateurs
    const getAllCommentaires = async () => {
        const commentaires = await Axios.get('/commentaire')
        // console.log('LA liste', etudiants.data.data)
        return commentaires.data
    }
    const getCommentairesByEnchereId = async (id) => {
        const commentaires = await Axios.get(`/commentaire/enchere/${id}`)
        // console.log('LA liste', etudiants.data.data)
        return commentaires.data
    }
    const deleteCommentaire = async (id) => {
        await Axios.delete(`/commentaire/${id}`)
    }

    const getCommentaireById = async (id) => {
        const commentaire = await Axios.get(`/commentaire/${id}`)
        return commentaire.data
    }
    const createCommentaire = async (id,commentaire) => {
        await Axios.post(`/commentaire/${id}`, commentaire)

    }

    const updateCommentaire = async (id, commentaire) => {
        await Axios.put(`/commentaire/${id}`, commentaire)

    }

    return { getAllCommentaires, deleteCommentaire, getCommentaireById, createCommentaire,updateCommentaire,getCommentairesByEnchereId }
}

export default useCommentaire