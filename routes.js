const express = require('express');

const router = new express.Router();

const item = require('./fakeDb.js')



router.get("", function(req, res) {
    console.log(item.items)
    return res.json(item.items);
  });

router.post("", function(req, res) {
    const newItem = (req.body.name, req.body.price);
    console.log(newItem)
    item.items.push(newItem);
    return res.json({items: item.items });
});

router.get("/:name", function(req, res){
    let item = item.find(req.params.name)
    return res.json({items: item });

})

router.patch("/:name", function(req, res){
    let item = item.update(req.params.name, req.body)
    return res.json({items: item });

})

router.delete("/:name", function(req, res){
    let item = item.remove(req.params.name)
    return res.json({message: 'deleted'});
})


module.exports = router;