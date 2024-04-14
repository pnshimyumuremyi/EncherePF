import Axios from "./otherService";

const useCompte = () => {
    //Creer une fonction recupere la liste des utilisateurs
    const getAllComptes = async () => {
        const comptes = await Axios.get('/compte')
        // console.log('LA liste', etudiants.data.data)
        return comptes.data
    }
    const deleteCompte = async (id) => {
        await Axios.delete(`/compte/${id}`)
    }

    const getCompteById = async (id) => {
        const compte = await Axios.get(`/compte/${id}`)
        return compte.data
    }
    const createCompte = async (compte) => {
        await Axios.post(`/compte`, compte)

    }

    const updateCompte = async (id, compte) => {
        await Axios.put(`/compte/${id}`, compte)

    }

    return { getAllComptes, deleteCompte, getCompteById, createCompte,updateCompte }
}

export default useCompte