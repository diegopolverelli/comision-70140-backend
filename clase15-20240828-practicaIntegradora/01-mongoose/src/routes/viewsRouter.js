import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()


router.get('/',async(req,res)=>{

    let usuarios=await UsuariosManager.getUsers()
    console.log(usuarios[0]);
    let fakeUser={
        rol: 'user',
        materias: [],
        _id: "new ObjectId('66cd2a6392cbe3b9b23df861')",
        nombre: 'Mariana',
        edad: 32,
        email: 'mariana@test.com'
      }
      console.log(fakeUser);
    //   usuarios=[fakeUser]

    console.log(Object.keys(fakeUser));
    // console.log(Object.keys(usuarios[0].toJSON()));

    res.setHeader('Content-Type','text/html')
    res.status(200).render("home", {
        usuarios
    })
})