import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  superHeroes = [
    {
      nombre: "Capitan America",
      img: "https://media.vandalsports.com/i/1706x960/4-2021/2021427125442_1.jpg.webp",
      identidad: "Steve Rogers",
      grupo: "vengadores",
    },
    {
      nombre: "Iron Man",
      img: "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675",
      identidad: "Tony Stark",
      grupo: "vengadores",
    },
    {
      nombre: "Hulk",
      img: "https://as.com/meristation/imagenes/2019/10/08/noticias/1570522585_909312_1570522675_noticia_normal.jpg",
      identidad: "Bruce Banner",
      grupo: "vengadores",
    },
    {
      nombre: "Wolverine",
      img: "https://www.quever.news/u/fotografias/m/2021/2/11/f608x342-6627_36350_7.jpg",
      identidad: "Logan",
      grupo: "X-Men",
    },
  ];

  renderSuperHeroes = () => {
    return (
      <Row>
        {this.superHeroes.map((heroe) => {
          return (
            <Col xs={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={heroe.img} />
                <Card.Body>
                  <Card.Title>{heroe.nombre}</Card.Title>
                  <Card.Text>{heroe.identidad}</Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  };

  render() {
    return (
      <Container>
        <div>{this.renderSuperHeroes()}</div>
      </Container>
    );
  }
}

export default Home;
