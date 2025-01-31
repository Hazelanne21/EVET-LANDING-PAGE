import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import petImage1 from "../assets/skin.jpg";
import petImage2 from "../assets/urinary.jpg";
import petImage3 from "../assets/eye.jpg";
import petImage4 from "../assets/ear.jpg";
import petImage5 from "../assets/respiratory.jpg";
import petImage6 from "../assets/digestion.jpg";
import petimage from '../assets/cnn.png';
import petimages from '../assets/softmax.png';
import petimage7 from '../assets/DogDisease.png';
import petimage8 from '../assets/CatDisease.png';



function CNN() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const navigate = useNavigate();

  const animalData = [
    {
      image: petImage1,
      title: "SKIN",
      symptoms: [
        "Presence of ticks and fleas",
"        Red, inflamed patches on the skin",
       " Hair loss in specific areas",
       " Dry, flaky, or scaly skin",
       " Open wounds or crusty lesions"
        
        
      ],
      recommendation: [
       " Bathe your pet using anti-tick and flea shampoo or medicated soap. Manual removal of ticks.",
       " Apply pet-safe ointments or creams to reduce redness and irritation.",
       " Use anti tick and fleas medicated shampoo or soap.",
       " Keep your pet’s living area clean and free of potential irritants or parasites.",
       " Disinfect open wounds with a mild antiseptic solution before covering them lightly. Use medicated soap or shampoo.",
       " Consult your veterinary clinic for further evaluation."

      ]
    },
    {
      image: petImage2,
      title: "URINARY",
      symptoms: [
        " Difficulty or straining during urination.",
        " Blood in the urine.",
        " Wetness or leaking around the genital area",
        " Swollen or irritated genital area"


      ],
      recommendation: [
        " Encourage your pet to drink clean and fresh water to promote urination.",
        " Observe and keep track of urination attempts to share with a vet.",
        " Observe and keep track of urination attempts to share with a vet.",
        " Might be in estrus / in heat.",
        " Consult your veterinary clinic for further evaluation."


      ]
    },
    {
      image: petImage3,
      title: "EYES",
      symptoms: [
        "Red or swollen eyes.",
        " Cloudy or discolored.",
        " Excessive tearing or crusting around the eyes."


      ],
      recommendation: [
        " Clean with moist cotton or cloth.",
        " Observe and attempt to share with a vet.",
        " Clean with moist cotton or cloth.",
        " Consult your veterinary clinic for further evaluation."
      ]
    },
    {
      image: petImage4,
      title: "EARS",
      symptoms: [
        " Frequent head shaking or ear scratching.",
        " Visible dirt, wax, or discharge in the ears"
      ],
      recommendation: [
        " Regularly clean the ears using ear cleaner.",
        " Regularly clean the ears using ear cleaner or with a cotton.",
        " Consult your veterinary clinic for further evaluation."
       
      ]
    },
    {
      image: petImage5,
      title: "RESPIRATORY",
      symptoms: [
        " Nasal discharge (clear or colored).",
        " Open-mouth breathing or excessive panting.",
        " Sneezing with visible mucus discharge.",
        " Noticeable lethargy or difficulty in movement"


      ],
      recommendation: [
        " Place your pet in a warm, humid environment to help with nasal congestion.",
        " Clean the nose gently with a damp cloth to remove mucus buildup.",
        " Avoid dusty or smoke-filled environments that might worsen symptoms.",
        " Provide easy access to fresh drinking water to keep your pet hydrated.",
        " Consult your veterinary clinic for further evaluation."
      ]
    },

    {
      image: petImage6,
      title: "DIGESTION",
      symptoms: [
       " Vomiting",
        "Diarrhea or loose stools (visible stains or residue around the tail area).",
        "Enlarged abdomen or visibly swollen stomach.",
        "Drooling excessively or foaming at the mouth."


      ],
      recommendation: [
        " Observe and offer small amounts of highly digestible food.",
        " Ensure your pet has access to clean, fresh water to prevent dehydration.",
        " Consult your veterinary clinic for further evaluation."
      ]
    },
              
  ];

  return (
  <div className="animal-app-container">
    <div className="header">
      <h1 className="main-title">Convolutional Neural Network</h1>
      <p className="sub-title">
          The <strong>Convolutional Neural Network (CNN)</strong> is a deep learning algorithm primarily used for image processing. 
          It works by processing data with a grid-like topology, such as images, through multiple layers of interconnected nodes. 
          Each layer extracts features from the input data, which are then used to make predictions. 
          In this application, we utilize CNNs to analyze images of various animals and predict their symptoms based on the images.
      </p>
    </div>

      {/* New Explanation Section */}
      <div className="algorithm-explanation">
        <h2>CNN Algorithm</h2>
        <p className="sub-title">
          <strong>Formula:</strong> 
      </p>
      <p className="sub-title"> 
          Conv(I,K)=∑∑I(x,y)⋅K(x,y) 
      </p>
      <p className="sub-title">
          where I is the input image matrix, K is the filter kernel, and the summation iterates over spatial dimensions. These filters extract features like edges or textures. Pooling layers then reduce the spatial dimensions, preserving important features while discarding noise and redundancy. This progression from low-level to high-level features enables the network to recognize complex patterns necessary for symptom identification.

      </p>

      
        <div className="cnn-image">
                  <img src={petimage} alt=" Pet" />
        </div>

         <p className="sub-title">
          The model architecture in this implementation comprises several convolutional layers, each followed by max-pooling layers. 
          The <strong>first convolutional layer</strong> captures basic features such as edges, while <strong>second convolutional layers </strong>detect more complex 
          structures like shapes and textures and the <strong>third convolutional layers </strong> detect more detailed patterns. A flattening layer transforms 
          the final feature maps into a 1D vector, which is passed through dense layers for high-level reasoning. The final output layer, 
          a softmax function, computes probabilities for each class: 

      </p>
      <p className="sub-title">
          <strong>Formula:</strong> 
      </p>
      <div className="formula-image">
                  <img src={petimages} alt=" Pet" />
        </div>
  
      <p className="sub-title">
      where zi is the input to the  i-th neuron, and N is the total number of classes. These probabilities indicate the model's 
      confidence in its predictions, corresponding to symptoms in this case. 
      </p>
      <p className="sub-titles">• Assume a model outputs three logits: z=[2.0,1.0,0.1]​</p>
      <p className="sub-titles">• Compute exponentials:ez1​=e2.0≈7.39,   ez2​=e1.0≈2.72,     ez3​=e0.1≈1.11</p>
      <p className="sub-titles">• Compute probabilities:  Softmax(z1​)=7.39+2.72+1.11≈ 11.22</p>
      <p className="sub-titles">• Softmax(z1​) 7.39/11.22​≈0.64, Softmax(z2​)≈0.24, Softmax(z3​)≈0.10.</p>
      <p className="sub-titles">• The model predicts class 1 with 64% confidence.</p>
      </div>
      


    <h2 className="gallery-title">Sign and Symptoms</h2>
    <div className="image-gallery"> {/* Ensure this class is applied */}
      {animalData.map((animal, index) => (
        <div
          key={index}
          className="image-item"
          onClick={() => setSelectedAnimal(animal.title)}
        >
          <div className="image-wrapper">
            <img src={animal.image} alt={animal.title} className="gallery-image" />
            {selectedAnimal === animal.title && (
              <div className="text-overlay">
                <h3 className='h3-a'>{animal.title}</h3>
                <h4 className='h4-s'>Sign and Symptoms:</h4>
                <ul>
                  {animal.symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
                {animal.recommendation && (
                  <>
                    <h4 className="h4"><strong>Recommendation: </strong></h4>
                    <ul>
                      {animal.recommendation.map((cause, idx) => (
                        <li key={idx}>{cause}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="header">
      <h1 className="main-title">Commonly Searches Symptoms</h1>
      <div className="cnn-image">
                  <img src={petimage7} alt=" Pet" />
        </div>
        <div className="cnn-image">
                  <img src={petimage8} alt=" Pet" />
        </div>
    </div>
  </div>
);
}

export default CNN;
