const express = require('express');
const app = express();
const db = require('./models');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded(
    {
        extended: true
    }
));

app.listen(PORT, ()=>{
    console.log('Server started on port 3000');
})

db.sequelize.sync()
.then((result)=>{
    app.listen(3000,()=>{
        console.log('Server started');
    })
})

.catch((err)=>{
    console.log(err);
})

app.post("/hollywood", async (req, res) =>{
    const data = req.body;
    try{
        const hollywood = await db.Hollywood.create(data);
        res.send(hollywood);
    } catch (err) {
        res.send(err);
    }
});

app.put('/hollywood/:ID', async (req, res)=>{
    const id = req.params.ID;
    const data = req.body;

    try{
        const hollywood = await db.Hollywood.findByPk(id);
        if (!hollywood){
            return res.status(404).send({ message: 'Film tidak ditemukan'});
        }
        await hollywood.update(data);
        res.send({ message: 'FIlm berhasil di update', hollywood});
    } catch(err){
        res.status(500).send(err);
    }
});
