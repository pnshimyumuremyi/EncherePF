
import Axios from "./otherService";
const useRole = () => {
    //Creer une fonction recupere la liste des utilisateurs
    const RoleListe = async () => {
        const roles = await Axios.get('/role')
        // console.log('LA liste', etudiants.data.data)
        return roles.data
    }
    const deleteRole = async (id) => {
        await Axios.delete(`/role/${id}`)
    }

    const getRoleById = async (id) => {
        const role = await Axios.get(`/role/${id}`)
        return role.data
    }
    const createRole = async (role) => {
        await Axios.post(`/role`, role)

    }

    const updateRole = async (id, role) => {
        await Axios.put(`/role/${id}`, role)

    }

    return { RoleListe, deleteRole, getRoleById, createRole,updateRole }
}

export default useRole