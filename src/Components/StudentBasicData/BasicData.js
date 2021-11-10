import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styles from './BasicData.module.css'
const BasicData = () => {
    return (
        <Card  className={styles.card}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Datos Basicos del alumno
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ejemplo Ejemplo Ejemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo Ejemplo
              </Typography>
              </CardContent>
        </Card>
    )
}
export default BasicData;
