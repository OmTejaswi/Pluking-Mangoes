function mouseDragged() {
    Matter.Body.setPosition(stone1.body,{x:mouseX , y: mouseY})
}

function mouseReleased() {
     chain1.fly();
}

function detectCollision(bodyA, bodyB) {
	var bodyAPosition = bodyA.body.position;
	var bodyBPosition = bodyB.body.position;

	var distance = dist(bodyAPosition.x,bodyAPosition.y,bodyBPosition.x,bodyBPosition.y);

	if(distance<=bodyA.r + bodyB.r){
		Matter.Body.setStatic(bodyB.body, false)
	}
}

function keyPressed() {
	if(keyCode == 32) {
		//Matter.Body.setPosition(stone1.body, {x: 355, y:460});
		chain1.attach(stone1.body);
	}
}