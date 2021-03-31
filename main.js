var canvas= new fabric.Canvas("myCanvas");
bw=30;
bh=30;
plx=30;
ply=30;
player_object="";
block_object="";
function player_update () {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object=Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set({
            top:ply,left:plx
        });
        canvas.add(player_object);
    });

}

function new_img(get_Img) {
    fabric.Image.fromURL(get_Img, function (Img) {
        block_object=Img;
        block_object.scaleToWidth(140);
        block_object.scaleToHeight(150);
        block_object.set({
            top:ply,left:plx
        });
        canvas.add(block_img_object);
    });
}