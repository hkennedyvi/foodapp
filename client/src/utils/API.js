import axios from "axios";

export default {
    getMenus: () => {
        return axios.get('/api/menus');
    }
}