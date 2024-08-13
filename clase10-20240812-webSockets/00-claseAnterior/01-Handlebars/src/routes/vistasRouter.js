import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{
    let {nombre}=req.query
    let persona={
        nombre:"Juan", email:"juan@test.com"
    }
    let titulo="Home Page - Coder"
    res.setHeader('Content-Type','text/html');
    res.status(200).render("home", {
        titulo, 
        nombre,
        persona, estilo:"styles"
    });
})

router.get('/heroes',(req,res)=>{

    let heroes=[
        {
            id:1,
            name:'Spider-Man',
            alias:'Peter Parker',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:2,
            name:'Superman',
            alias:'Clark Kent',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:3,
            name:'Iron Man',
            alias:'Tony Stark',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:4,
            name:'Wonder Woman',
            alias:'Diana Prince',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:5,
            name:'Black Widow',
            alias:'Natasha Romanoff',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:6,
            name:'Batman',
            alias:'Bruce Wayne',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:7,
            name:'Aquaman',
            alias:'Arthur Curry',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:8,
            name:'Captain America',
            alias:'Steve Rogers',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:9,
            name:'Flash',
            alias:'Barry Allen',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:10,
            name:'Black Panther',
            alias:'TChalla',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:11,
            name:'Green Lantern',
            alias:'Hal Jordan',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:12,
            name:'Thor',
            alias:'Thor Odinson',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:13,
            name:'Batwoman',
            alias:'Kate Kane',
            team:'Bat Family',
            publisher:'DC',
        },
        {
            id:14,
            name:'Hulk',
            alias:'Bruce Banner',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:15,
            name:'Zatanna',
            alias:'Zatanna Zatara',
            team:'Justice League Dark',
            publisher:'DC',
        },
        {
            id:16,
            name:'Doctor Strange',
            alias:'Stephen Strange',
            team:'Defenders',
            publisher:'Marvel',
        },
        {
            id:17,
            name:'Green Arrow',
            alias:'Oliver Queen',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:18,
            name:'Scarlet Witch',
            alias:'Wanda Maximoff',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:19,
            name:'Martian Manhunter',
            alias:'Jonn Jonzz',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:20,
            name:'Deadpool',
            alias:'Wade Wilson',
            team:'None',
            publisher:'Marvel',
        },
    ]

    let numero=Math.floor(Math.random()*(20)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    let heroe=heroes[numero] 

    res.setHeader('Content-Type','text/html')
    res.status(200).render("heroes", {
        heroe, estilo:"stylesHero", titulo:"Heroe's Page"
    })
})