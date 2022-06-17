const images = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
];

const ImageNum = Math.floor(Math.random() * images.length);
const chosenImage = images[ImageNum];

switch (ImageNum) {
	case 0:
		document.body.style.color = "orange";
		break;
	case 5:
		document.body.style.color = "lightgoldenrodyellow";
		break;

	default:
		document.body.style.color = "pink";
}

const bgImage = document.createElement("img");
bgImage.id = "bg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);