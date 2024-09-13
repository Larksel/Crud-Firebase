import React, { useState, useEffect } from "react";

const AddOrEditStudent = (props) => {
  const initialFieldValues = {
    name: "",
    course: "",
    semester: "",
    period: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "") setValues({ ...initialFieldValues });
    else
      setValues({
        ...props.studentObjects[props.currentId],
      });
  }, [initialFieldValues, props.currentId, props.studentObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;

    setValues({
      ...values,

      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onChange={handleFormSubmit}>
      <div className="col-12 col-md-12">
        <div className="card">
          <div className="card-header">
            <input
              value={
                props.currentId === ""
                  ? "Adicionar Estudante"
                  : "Atualizar Estudante"
              }
            />
          </div>

          <div className="card-body">
            <div className="center-form">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Nome Completo<span className="mandatoryFieldColor">*</span>
                    </label>

                    <input
                      value={values.name}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      name="name"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Curso<span className="mandatoryFieldColor">*</span>
                    </label>

                    <input
                      value={values.course}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      name="course"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Semestre<span className="mandatoryFieldColor">*</span>
                    </label>

                    <input
                      value={values.semester}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      name="semester"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Período<span className="mandatoryFieldColor">*</span>
                    </label>

                    <input
                      value={values.period}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      name="period"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-12">
                  <div className="btn-group mb-3 mt-2 cmn-btn-grp">
                    <input
                      type="submit"
                      value={props.currentId === "" ? "Save" : "Update"}
                      className="btn btn-success btn-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddOrEditStudent;
