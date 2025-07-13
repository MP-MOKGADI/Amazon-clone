import axios from "axios";

const instance =axios.create({
    baseURL: "http://127.0.0.1:5001/zaio--clone-36fc1/us-central1/api"//the apl ( the cloud function url)
})

export default instance