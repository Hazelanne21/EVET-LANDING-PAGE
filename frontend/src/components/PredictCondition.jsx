import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PredictCondition() {
    const navigate = useNavigate();
    const [animal, setAnimal] = useState('');
    const [numSymptoms, setNumSymptoms] = useState(4);
    const [symptoms, setSymptoms] = useState(Array(10).fill(''));
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term

    const animalOptions = ['Buffaloes', 'Cat', 'Cow', 'Deer', 'Dog', 'Donkey', 'Elephant', 'Fox', 'Goats', 'Hamster', 'Horse', 'Lion', 'Monkey', 'Pig', 'Rabbit', 'Sheep', 'Tiger'];
    const symptomOptions = [ 
      'Abdominal discomfort', //4
      'Abdominal pain', //6
      'Anemia', //20
      'Anorexia', //48
      'Attacks', //cat
      'Aversion to light', //sheep
      'Balance problem', //buffaloes
      'Bad smell', //cat
      'Berberi', //buffaloes and goat
      'Black on ear', //cat
      'Blindness',//20
      'Blisters', ///cow and elephant
      'Blood from mouth', //4 
      'Blood in feces', //cat
      'Blood in stool', //cat
      'Bloody',
      'bloody discharge',
      'bloody diarrhea',
      'bloody droping',
      'Bluish white opacity', //2
      'Broody behavior', //donkey
      'Burning ache or pain', //donkey
      'Carcass decomposes', //sheep and pig
      'Change in gait', //elephant and cat
      'Chest Pain', //4
      'Chills', //8
      'Chronic eye inflammation', //dog and buffaloes
      'Clubbed of Feather', //buffaloes
      'Colic', //11
      'Continuous loss of weight', //monkey
      'Constipation', //4
      'Convulsion', //12
      'Cornea become cloudy',  // goat and buffaloes
      'Coughing', //87
      'Crusty', //crusty
      'Decreased stool production', //donkey and pig
      'Decreased eyelid', //sheep and pig
      'Decreased growth of bone', //buffaloes and sheep
      'Decreased growth of hair', //buffaloes and sheep
      'Decreased appetite', //deer and buffaloes
      'Decrease in milk production ', //elephant
      'Depression', //73
      'Dejection', //2 buffaloes
      'Dehydration', //23
      'Difficulty in breathing', //29
      'Difficulty in feeding', //buffaloes
      'Difficulty breathing', //13
      'Difficulty in Swallowing', //3
      'Difficulty in walking', //1
      'Dirty', //pig and sheep
      'Discharge',
      'Discharge from ear',
      'Discharge from eyes',
      'Dizziness',
      'Dizziness and fainting',
      'Diarrhea',
      'Drooling',
      'Drooping ears',
      'Drooping wings',
      'Drop on egg production',
      'Dry Scabs',
      'Dry or tacky gums',
      'Dry or dull hair',
      'Dry hair coat',
      'Dryness skin',
      'Dyspnea',
      'Edema',
      'Edema in lower jaw',
      'Egg production stops',
      'Emaciation',
      'Enlarged Thymus',
      'Enlarged Skulls',
      'Enlarged lymph nodes',
      'Erythema',
      'Excessive',
      'Excessive food intake',
      'Excessive blood loss',
      'Excessive eye watering',
      'Excessive production',
      'Excessive grooming',
      'Exhaustion',
      'Experiencing changes in weight',
      'Facial defects',
      'Facial muscle twitching',
      'Facial Paralysis',
      'Facial edema',
      'Facial Swelling',
      'Fatigue',
      'Fatty stool',
      'Feline infections',
      'Fever',
      'Firm',
      'Flat ribs',
      'Flatulence',
      'Fluffed Feather',
      'Floopy muscle',
      'Forth eye',
      'Foul breath',
      'Foul smelling',
      'Frequent yawning',
      'Frequent eye infections',
      'Gastritis',
      'Gasc',
      'Gas',
      'Grinding of teeth',
      'Groosly enlarged',
      'Hair loss',
      'Halitosis',
      'Head ache',
      'Head Pressing',
      'Head shaking',
      'Heavy Breathing',
      'Hematuria',
      'Hemoptysis',
      'Hepatitis',
      'High body temperature',
      'High temperature',
      'Hoarseness',
      'Hot joints',
      'Hydrophobia',
      'Inflamed eye',
      'Inflamed nostrils',
      'Inflammation',
      'Inability to stand',
      'Inability to jump',
      'Inability to absorb nutrients',
      'Inability to digest',
      'Infection',
      'Infection of the Skin',
      'Infected navels',
      'Intellectual disability',
      'Irritation',
      'Isolation from flock',
      'Jaw dropped',
      'Jaundice',
      'Kid mortality',
      'Kicking',
      'Kicking at the belly',
      'Lack of coordination',
      'Lack of pigmentation',
      'Lack of vocalization',
      'Lack of appetite',
      'Lack of walking',
      'Lacrimation',
      'Lame',
      'Lameness',
      'Lameness in affected leg',
      'Labored breathing',
      'Lesion',
      'Lethargy',
      'Less Eat',
      'Liquid Dropping',
      'Listlessness',
      'Listless',
      'Loss of Appetite',
      'Loss of consciousness',
      'Loss of pigment',
      'Loss of powder down',
      'Loss of wariness',
      'Loud breathing',
      'Lumps',
      'Mild sneezing',
      'Mortality',
      'Morbidity',
      'Muscle aches',
      'Muscle trembling',
      'Nasal',
      'Nasal bleeding',
      'Nasal Discharge',
      'Nausea',
      'Neck paralysis',
      'Neck Paralysis',
      'Neck vein swelling',
      'Neurological',
      'Nesting behavior',
      'Nosebleeds',
      'Obstructed Lungs',
      'Ocular discharge',
      'Odor to ear',
      'Oxygen deficiency',
      'Pain',
      'Pain and bloating',
      'Painful',
      'Pale comb',
      'Pawing at bedding',
      'Periodic vomiting',
      'Polydipsia',
      'Polyuria',
      'Preening',
      'Puffed up Feather',
      'Purplish combs',
      'Rapid breathing',
      'Rapid heart rate',
      'Rapid pulse and heart rates',
      'Recumbency',
      'Red and inflamed ear',
      'Redness',
      'Redness of white of the eye',
      'Regurgitation of food',
      'Retarded Growth',
      'Rhinorrhea',
      'Roughened',
      'Ruffled Appearance',
      'Ruffled feathers',
      'Scabs',
      'Scabs On feet',
      'Scabs on lip',
      'Scaly skin',
      'Scratch',
      'Scratching ear',
      'Seizures',
      'Severe headache',
      'Severe swelling',
      'Sharp Feather',
      'Shaking head',
      'Shallow breathing',
      'Shortness of breath',
      'Shyness or aggression',
      'Skin Allergy',
      'Skin color change',
      'Skin infection',
      'Skin irritation',
      'Skin rashes',
      'Slow growth',
      'Small and yellow bumps',
      'Sneezing',
      'Skeletal abnormalities',
      'Sour Throat',
      'Speech delay',
      'Staggering',
      'Stained wool',
      'Stealing',
      'Stiff',
      'Stumbling',
      'Swallowing',
      'Swelling',
      'Swelling in the bite area',
      'Swelling of eyelid',
      'Swelling of joint',
      'Swollen',
      'Swollen Abdomen',
      'Swollen kidney',
      'Tail Bobbing',
      'Tail shaking',
      'Tenderness',
      'Tear production',
      'Thickening of skin',
      'Tiredness',
      'Torticollis',
      'Trembling',
      'Tremor of head and neck',
      'Undigested in their feces',
      'Underdeveloped muscles',
      'Under-nutrition',
      'Urine infection',
      'Urination problem',
      'Vision Problem',
      'Vomiting',
      'Walking problem',
      'Watering of eyes',
      'Wasting',
      'Weak pulse',
      'Weakness',
      'Weight loss',
      'Wheezing',
      'Wound',
      'Yellow Eye'
    ];
    
    const handleNumSymptomsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumSymptoms(value);
    };

    const handleSymptomChange = (index, value) => {
        const newSymptoms = [...symptoms];
        newSymptoms[index] = value;
        setSymptoms(newSymptoms);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/check_condition', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    animal_name: animal,
                    symptoms: symptoms.slice(0, numSymptoms),
                }),
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }
            const data = await response.json();
            setResult(data);
            navigate('/result', { state: { result: data } });
        } catch (error) {
            console.error('Error occurred:', error);
            alert('An error occurred while fetching data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        navigate('/animal-condition');
    };

    // Filter symptoms based on the search term
    const filteredSymptoms = symptomOptions.filter(symptom => 
        symptom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="predict-condition-container">
            <h1>Predict Animal Condition</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="animal" className="form-label">Types of Animal: </label>
                    <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} required className="form-option">
                        <option value="">Pick an animal</option>
                        {animalOptions.map((animal) => (
                            <option key={animal} value={animal}>{animal}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numSymptoms" className="form-label">Number of Symptoms:</label>
                    <input
                        type="number"
                        id="numSymptoms"
                        value={numSymptoms}
                        onChange={handleNumSymptomsChange}
                        min="4"
                        max="10"
                        required
                        className="form-option"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Symptoms:</label>

                    
                    {[...Array(10)].map((_, index) => {
                        const availableSymptoms = filteredSymptoms.filter(
                            (symptom) => !symptoms.includes(symptom) || symptoms[index] === symptom
                        );
                        return (
                            <select
                                key={index}
                                value={index < numSymptoms ? symptoms[index] : ''}
                                onChange={(e) => handleSymptomChange(index, e.target.value)}
                                disabled={index >= numSymptoms}
                                required={index < numSymptoms}
                                className="form-option"
                            >
                            
                                <option value="">Symptoms {index + 1}:</option>
                                {availableSymptoms.map((symptom) => (
                                    <option key={symptom} value={symptom}>{symptom}</option>
                                ))}
                            </select>
                        );
                    })}
                    
                </div>
                <div className="button-group">
                    <button type="button" className="back-button" onClick={handleBack}>
                        Back
                    </button>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
            {result && (
                <div className="result">
                    <h3>Prediction Result</h3>
                    <p>Condition: {result.condition_status}</p>
                    <p>Recommendation: {result.recommendation}</p>
                    <pre>{JSON.stringify(result.classification_report, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default PredictCondition;