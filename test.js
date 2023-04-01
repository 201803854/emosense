const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

// 이미지 파일 경로
const filePath = 'path/to/image.jpg';

async function analyzeImage() {
  try {
    const [result] = await client.faceDetection(filePath);
    const faces = result.faceAnnotations;
    console.log(`Found ${faces.length} faces`);
    faces.forEach((face, i) => {
      console.log(`  Face #${i + 1}:`);
      console.log(`    Joy: ${face.joyLikelihood}`);
      console.log(`    Anger: ${face.angerLikelihood}`);
      console.log(`    Sorrow: ${face.sorrowLikelihood}`);
      console.log(`    Surprise: ${face.surpriseLikelihood}`);
    });
  } catch (err) {
    console.error(err);
  }
}

analyzeImage();
