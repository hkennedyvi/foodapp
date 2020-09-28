import axios from "axios";

export default {
    getMenus: () => {
        return axios.get('http://localhost:3002/menus');
    }
}