import { Container, Row, Col } from "react-bootstrap"
import '../WhoAreWe/WhoAreWe.css'


const WhoAreWe = () => {

    return (
        <Container className="WhoAreWe">
            <hr className="hrAUP"></hr>
            <h3 className='WhoAreWeT'>Who are we?</h3>
            <Row className="teamRow mb-4">
                <Col xs={6}>
                    <img className="personalImg" src="https://i.pinimg.com/originals/5b/d9/d8/5bd9d8749cf8bc21538926eb22822337.png" alt="dav" />
                </Col>
                <Col xs={6}>
                    <h5 className="teamName">Jadde Suárez</h5>
                    <p>Info sobre nosotros</p>
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={6}>
                    <h5 className="teamName">David Fernández</h5>
                    <p>Info sobre nosotros</p>
                </Col>
                <Col xs={6}>
                    <img className="personalImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAD5+fnd3d38/PxZWVmNjY309PTg4ODu7u7n5+dcXFza2try8vK+vr7i4uK0tLQRERHIyMhJSUmHh4dRUVFgYGA9PT2urq7FxcW7u7vOzs4vLy9MTEwgICCRkZF0dHRsbGwpKSk5OTkdHR19fX1CQkIODg5mZmadnZ2hoaEeHh5ycnK/7+YsAAAEjElEQVR4nO3c25KiOhQG4F4qCKIInmnwiOBh+/7PNwFrqrpnSM/MIm4W9P912RdcpPIXkJCQ8PYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAHvaE7mvbH8cx/96PZbBa9B0HwXvIj3/ejeDzuO44zVUaladNV/sWAknTrrTxrnu7CXZKmiXIKqQar6UyfTepk0eg1HeoT98u6XsLz7pTOrethsbDtRZZlC3u/39ulRSk7rpZbJZ/n+TpVf3nQdKbPpuqqcqfqPhqN3Inrqv/FbzLsDZqumSl9cfeNaePOJ+z+OVT34bLpOrwWErafg4St1+98QvSH7df9c6gSek3X4bW+RcLuX6UdT9j9trSrCQdKb1JMEwZE83Ecz/xgc9uXiumYw3WleJ5neatV8Vt51na9zrfL5XxdzMVdLheiC/lNB/nIJao1R1hJVMKR8XhK1HSqj9RA8OdJDHdJkqTFNWd5HtH5eD1m9u1+35QCf1bMYz85zvOn/hdT2s+Zbdcd9nq9twfRrOlUH6lh0vZt0CvuwI+HB0Q5s8QV0dhAxYzRNJo9opRZokXUr1Mj01TXvqo4rM5hwixRJRT1FkYlfFQcVglPzBJVQqdOjUyLiQ5Vx4l2zBI9YfehPuGZWaK0lkafMGSWKLClOVYdV/0j8zXTkmhUp0amadrSGglzokmdGpmmSxiy39muiYZ1amSaSnitOn7uUsLK+7A7CXVtaXcSRkSLquP8hLmwhL4mIb+laUvCCzthKmzlzDuRXXWcfw4TYQkD4wlPLUnIb2kEJtxXHefXsy0J+XdTWxLy++1dSxLO2SOEkD0qeQ1dS8Mf5fHHXa+h6w+tziTUPZfyZ8zaktBjz7bwe9LX0D2X8hNK6y10Cfkz19KevHUJ+W1pW0ZP/IT8nvQ1zF+l0hLGRFnVcX5vIW2+FAn/XVsS8t+RSWtLZ5qW5koU80qUllDXlj7YCaXNCOvGFgf2qhhpCXXjwwwJtaTdh+YTSnumeUlCt06NTNMl5Lc00hJu9AmZ6++Q8P9mPuG28wmltaW6hPynNmlji++b8NiZhLr+kD96kvZc+sWMMHMELO09vm4EzJ9rk5bwi3ka5nxpOedd7r1xxkocR5EfzeK4qdhx9TrvYkb4t/ZiMJy4z+8FTadOsWco8oPN/bbfL7KjtV0nu/Dy3Llxqdxn0tDdqVu5p/rtU5r8dwmV3el0Pp+rq/0PGlpXq1t9mddLc06KvTeecn1ktr14PLKmtgrpVtAmlRUPT2marufLpbU6HjLFvm2C4uNXcb/YElTuvNkKWwWt22g4KL7m5Q7LDXvq9lPV/9sSpT15l/uejJK2kn3K38KlIS3h6BUJRe17UgnXZkuUtqNkxN+GpyFt35P7HRJyNxpqSNvZNeFvNNSQdg7NJ5TW0nT/KjWfUNpudfMJF8K+qWA+oS0sofmWZi8s4ZC/aVtD2lVqPqG0q9R8whuRqE8Gm094J9qYLbEm4x9I3BDdzZZY0+hm+D3KMF+LmqcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgCb8AGw2RSbHrH7OAAAAAElFTkSuQmCC" alt="dav" />
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={6}>
                    <img className="personalImg" src="https://i.pinimg.com/originals/e2/f3/ff/e2f3ff9e025c7e41f43e33dd7415fce0.jpg" alt="dav" />
                </Col>
                <Col xs={6}>
                    <h5 className="teamName">Marta Salvador</h5>
                    <p>Info sobre nosotros</p>
                </Col>
            </Row>
        </Container>
    )
}

export default WhoAreWe