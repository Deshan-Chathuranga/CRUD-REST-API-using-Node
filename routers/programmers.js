const express = require("express");
const router = express.Router();
const Programmer = require("../Model/programmer");

router.get("/", async (req, res) => {
  try {
    const programmers = await Programmer.find();
    res.json(programmers);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const programmer = await Programmer.findById(req.params.id);
    res.json(programmer);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.post("/", async (req, res) => {
  const prog = new Programmer({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const p1 = await prog.save();
    res.json(p1);
  } catch (error) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const prog = await Programmer.findById(req.params.id);

    prog.sub = req.body.sub;

    const p1 = await prog.save();
    res.json(p1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const prog = await Programmer.findById(req.params.id);

    await prog.remove();

   
    res.json(await Programmer.find())
    
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
