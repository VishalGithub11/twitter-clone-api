import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    res.status(501).json({error:"tweet not implmented yet"})
});

router.get("/:id", (req, res)=>{
    const {id} = req.params
    res.status(501).json({error:`tweet not implmented yet: ${id}`})
})
router.put("/:id", (req, res)=>{
    const {id} = req.params
    res.status(501).json({error:`tweet not implmented yet: ${id}`})
})
router.delete("/", (req, res)=>{
    const {id} = req.params
    res.status(501).json({error:`tweet not implmented yet: ${id}`})
})


export default router