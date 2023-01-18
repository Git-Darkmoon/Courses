// TEMPLATE GENERATOR
const characterGenerator = (people) => {
  return `
  
    <div class="col-md-2 col-lg-4 p-5">
        <div class="card shadow-lg p-3 mb-5 bg-transparent rounded-3 text-white bg-light">
            <div class="card-body text-center">
                <h5 class="card-title">
                    ${people.name}
                </h5>
                <p class="card-text">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-dark"><b>Birth Year: </b>${people.birth_year}</li>
                        <li class="list-group-item list-group-item-dark"><b>Gender: </b>${people.gender}</li>
                    </ul>
                    <button type="button" class="btn btn-warning mt-4 fw-bold p-2" data-bs-toggle="modal" data-bs-target="#moreInfo${people.birth_year}">
  Read More
</button>

                    <div class="modal fade rounded-3 text-dark" id="moreInfo${people.birth_year}" tabindex="-1" aria-labelledby="moreInfoLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="moreInfoLabel">${people.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body ">
                            <b>Height: </b>${people.height} cm.
                          <br>

                            <b>Mass: </b>${people.mass} kg.
                          <br>

                            <b>Skin Color: </b>${people.skin_color}.
                          <br>

                            <b>Hair Color: </b>${people.hair_color}.

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </p>
            </div>
        </div>
    </div>
    `;
};

const characterDom = document.querySelector("#characters");

const invokeData = async () => {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  console.log(data.results);

  data.results.map((item) => {
    characterDom.innerHTML += characterGenerator(item);
  });
};
invokeData();
