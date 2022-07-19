import axios from "axios";
import { useState } from "react";

export default function App() {
    const [photo, setPhoto] = useState("");

    function handleForm(e) {
        e.preventDefault();

        const data = new FormData();

        data.append("photo", photo);

         axios.post("http://localhost:5000/sign-up", data)
         .then(res => {
             console.log("Dados enviados pra API!", res.data);
         })
         .catch(error => {
             console.log(error);
         });
    }

    return (
        <form onSubmit={handleForm} encType="multipart/form-data">
            <input name="photo" type="file" onChange={(e) => setPhoto(e.target.files[0])} />
            <input type="submit" value="Enviar" />
        </form>
    );
}