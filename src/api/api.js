import axios from "axios"
console.log(axios)
export const req = ()=>{

    return axios.get("/api/plist/index&json=true")
}

export const test = (username="李瑞州",password="123466") => {
    return axios({
        headers: {
            'Content-Type': 'application/json'
        },
        url: "/api/v3/auth/tokens",
        method: "post",
        data: {
            "auth": {
                "identity": {
                    "methods": ["password"],
                    "password": {
                        "user": {
                            "name": username,
                            "password": password,
                            "domain": {
                                "name": "domainname"
                            }
                        }
                    }
                },
                "scope": {
                    "project": {
                        "name": "projectname"
                    }
                }
            }
        }
    })
}