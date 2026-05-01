import Phaser from "phaser";

class PizzaBoy extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("back", "/assets/background.png");
    }

    create() {

        this.n_pizza = 0

        this.add.image(0, 0, "back").setOrigin(0, 0).setDisplaySize(360, 640);

        const button = this.add.rectangle(90, 220, 70, 40, 0x4CAF50)
            .setInteractive();

        const label = this.add.text(90, 220, "Приготовить", {
            fontSize: "11px",
            color: "#ffffff"
        }).setOrigin(0.5);


        button.on("pointerup", () => {
            button.setScale(1);
            console.log("click!");
        });

        this.n_pizza_text = this.add.text(20, 250,
            "В вашей пиццерии есть " + this.n_pizza + " пицц",
            {
                "fontSize": "14px"
            })

        button.on("pointerdown", () => {
            console.log("button pressed");
            button.setScale(0.95);
            this.n_pizza++;
            this.n_pizza_text.setText("В вашей пиццерии есть " + this.n_pizza + " пицц");
        });


        // this.score = 0;
        //
        // this.text = this.add.text(180, 120, "хх", {
        //     fontSize: "48px",
        //     color: "#863c3c"
        // }).setOrigin(0.5);
        //
        // this.button = this.add.circle(180, 350, 90, 0xffcc00)
        //     .setInteractive({ useHandCursor: true });
        //
        // this.label = this.add.text(180, 350, "TAP", {
        //     fontSize: "24px",
        //     color: "#000"
        // }).setOrigin(0.5);
        //s
        // this.button.on("pointerdown", () => {
        //     this.score++;
        //
        //     this.text.setText(this.score);
        //
        //     this.tweens.add({
        //         targets: this.button,
        //         scale: 1.1,
        //         duration: 80,
        //         yoyo: true
        //     });
        // });
    }
}


const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
//    backgroundColor: "#1b1b1b",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [PizzaBoy]
};


new Phaser.Game(config);