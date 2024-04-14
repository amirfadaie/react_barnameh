import React from "react";

const About = ({ teachersName }) => {
    return (
        <div className="card text-center">
            <div className="card-header">درباره سازنده</div>
            <div className="card-body">
                <h5 className="card-title">اپلیکیشن کاهای روزمره</h5>
                <p className="card-text">سازنده : {teachersName} </p>
              
            </div>
            <div className="card-footer text-muted">
                با برنامه ریزی به هدفات نزدیکتر میشی
            </div>
        </div>
    );
};

export default About;
