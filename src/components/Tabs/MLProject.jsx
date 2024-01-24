import React from 'react'
import ProjectTemplate from '../ProjectTemplate'

import taxi1 from "../../Images/Projects/taxi1.png";
import taxi2 from "../../Images/Projects/taxi2.png";
import taxi3 from "../../Images/Projects/taxi3.png";
import taxi4 from "../../Images/Projects/taxi4.png";

function MLProject() {
    const projects = [
        {
            title: 'Taxi Fair Guru',
            description: 'The aim of the project is to train a Machine Learning model that can predict the taxi fair total amount from the given parameter. This is an academic project done in Kaggle. After Exploratory Data Analysis (EDA) and feature engineering the train data is preprocessed and transformed in such a way that it can be easily used by a ML regression algorithm. Then different regression algorithms are used to train the model and the performance of the trained model is validated using the test data. And KNN algorithm turns out to be producing a better R2 score. Then best parameters of KNN is find out using Hyperparameter tuning. Finally Gradient Boosting Regression is done using KNN as the base model for further enhancing the model performance. In last the model was able to obtain a R2 score of 0.94.',
            keyPoints: ['EDA & Feature Engineering', 'Hyperparameter Tuning', 'K-nearest neighbour', 'Gradient Boosting Regression'],
            repository: 'https://www.kaggle.com/code/akhilpl/21f1006584-notebook-t32023',
            link: 'https://www.kaggle.com/code/akhilpl/21f1006584-notebook-t32023',
            images: [{ src: taxi1, caption: 'Confusion matrix heatmap' }, { src: taxi2, caption: 'Scater plot with hue' }, { src: taxi3, caption: 'Data preprocessing and transformation' }, { src: taxi4, caption: 'Prediction score' }],
        },
    ];

    return (
        <div className='bg-slate-500 text-yellow-50 p-4 mb-5'>
            <h1 className="text-3xl font-burtons p-4">Machine Learning Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
                {projects.map((project, index) => (
                    <ProjectTemplate key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default MLProject