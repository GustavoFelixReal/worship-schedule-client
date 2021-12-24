import { Button, Container, TextField } from "@material-ui/core";
import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [name, setName] = useState('');
  const [churchId, setChurchId] = useState(0);
  const [userId, setUserId] = useState(0);

  return (
    <Container>
      <TextField 
        label="Nome do Item" 
        variant="outlined" 
        onChange={(e) => setName(e.target.value)} 
      />
      <TextField
        label="Igreja" 
        variant="outlined"
        type="number"
        onChange={(e) => setChurchId(Number(e.target.value))} 
      />
      <TextField
        label="Usuário" 
        variant="outlined"
        type="number"
        onChange={(e) => setUserId(Number(e.target.value))}
      />

      <Button variant="contained" onClick={() => handleSubmit(name, churchId, userId)}>
        Criar Item
      </Button>
    </Container>
  )
}