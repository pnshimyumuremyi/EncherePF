import axios from "axios";
import Axios from "./otherService";

const useEnchere = () => {
    //Creer une fonction recupere la liste des utilisateurs
    const getAllEncheres = async () => {
        const encheres = await Axios.get('/enchere')
        // console.log('LA liste', etudiants.data.data)
        return encheres.data
    }
    const deleteEnchere = async (id) => {
        await Axios.delete(`enchere/${id}`)
    }

    const getEnchereById = async (id) => {
        const enchere = await Axios.get(`/enchere/${id}`)
        return enchere.data
    }
    const createEnchere = async (enchere) => {
        await Axios.post('/enchere', enchere)

    }

    const updateEnchere = async (id, enchere) => {
        await Axios.put(`/enchere/${id}`, enchere)

    }

    return { getAllEncheres, deleteEnchere, getEnchereById, createEnchere,updateEnchere }
}

export default useEnchere