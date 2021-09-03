import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { IDireccion, IProductosCompra } from "../interfaces";
import { Autocomplete } from "@material-ui/lab";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";

interface IDataFake {
  title: string;
  year: number;
}

const top100Films: IDataFake[] = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

const columns: GridColDef[] = [
  {
    field: "producto",
    headerName: "PRODUCTO",
    width: window.innerWidth / 3.1,
  },
  {
    field: "precio",
    headerName: "PRECIO",
    width: window.innerWidth / 3.75,
  },
  {
    field: "cantidad",
    headerName: "CANTIDAD",
    width: window.innerWidth / 3.7,
  },
];

const VentasPage = () => {
  const [cantidad, setCantidad] = useState<number>(1);
  const [direccion, setDireccion] = useState<IDireccion>({
    ciudad: "",
    codigoPostal: "",
    colonia: "",
    cruces: "",
    domicilio: "",
    estado: "",
    tipo: "casa",
  });
  const [productos, setProductos] = useState<IProductosCompra[]>([]);
  const [valueAuto, setValueAuto] = useState<IDataFake>({ title: "", year: 0 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("adsdas");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            {/* DATOS CLIENTE */}
            <FormControl className="w-50 ">
              <InputLabel htmlFor="nombreCliente">Nombre Cliente</InputLabel>
              <Input
                id="nombreCliente"
                name="nombreCliente"
                required
                type="text"
              />
            </FormControl>
            <FormControl className="w-50 ">
              <InputLabel htmlFor="numTel">Numero De Telefono</InputLabel>
              <Input id="numTel" name="numTel" required type="tel" />
            </FormControl>

            {/* DATOS CLIENTE */}

            {/* DIRECCION */}
            <FormControl className="w-100 mt-4">
              <InputLabel htmlFor="domicilio">Domicilio</InputLabel>
              <Input id="domicilio" name="domicilio" required type="text" />
            </FormControl>
            <FormControl className="w-100 mt-4">
              <InputLabel htmlFor="codigoPostal">Codigo Postal</InputLabel>
              <Input
                id="codigoPostal"
                name="codigoPostal"
                required
                type="text"
              />
            </FormControl>
            <FormControl className="w-100 mt-4">
              <InputLabel htmlFor="colonia">Colonia</InputLabel>
              <Input id="colonia" name="colonia" required type="text" />
            </FormControl>
            <FormControl className="w-100 mt-4">
              <InputLabel htmlFor="ciudad">Ciudad</InputLabel>
              <Input id="ciudad" name="ciudad" required type="text" />
            </FormControl>
            <FormControl className="w-100 mt-4">
              <InputLabel htmlFor="cruces">Cruces</InputLabel>
              <Input id="cruces" name="cruces" required type="text" />
            </FormControl>
            <FormControl className="w-100 mt-4">
              <InputLabel htmlFor="estado">Estado</InputLabel>
              <Input id="estado" name="estado" required type="text" />
            </FormControl>
            {/* DIRECCION */}

            {/* PRODUCTOS */}
            <div style={{ display: "flex" }}>
              <FormControl className="w-50 mt-4">
                <InputLabel htmlFor="cantidad">Cantidad</InputLabel>
                <Input
                  value={cantidad.toString()}
                  onChange={(value) => {
                    setCantidad(parseInt(value.currentTarget.value));
                  }}
                  id="cantidad"
                  name="cantidad"
                  required
                  type="number"
                />
              </FormControl>

              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="w-50 mt-4"
              >
                <Autocomplete
                  id="combo-box-demo"
                  options={top100Films}
                  value={valueAuto}
                  getOptionLabel={(option) => option.title}
                  className="w-100"
                  onChange={(e, value) => {
                    if (value) {
                      const indexProducto = productos.findIndex(
                        (a) => a.id === value.title
                      );

                      if (indexProducto === -1) {
                        setProductos([
                          ...productos,
                          {
                            cantidad: cantidad,
                            id: value.title,
                            precio: value.year,
                            producto: value.title,
                          },
                        ]);
                      } else {
                        productos[indexProducto].cantidad += cantidad;
                      }

                      setCantidad(1);
                      setValueAuto({ title: "", year: 0 });
                    }
                  }}
                  renderInput={(params) => (
                    <>
                      <InputLabel htmlFor="productos">Productos</InputLabel>
                      <TextField {...params} />
                    </>
                  )}
                />
              </div>
            </div>
            {/* PRODUCTOS */}

            {/* TABLA PRODUCTOS */}
            <div className="row mt-5 mb-5">
              <div className="col-md-12">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>PRODUCTO</TableCell>
                      <TableCell>PRECIO</TableCell>
                      <TableCell>CANTIDAD</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productos.map((producto) => {
                      return (
                        <TableRow key={producto.id}>
                          <TableCell>{producto.producto}</TableCell>
                          <TableCell>{producto.precio}</TableCell>
                          <TableCell>{producto.cantidad}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
            {/* TABLA PRODUCTOS */}

            {/* TOTALES */}
            <div className="row mt-5 mb-5">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="col-md-4 mt-5"
              >
                <TextField
                  label="sub total"
                  variant="filled"
                  disabled
                  value="0"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="col-md-4 mt-5"
              >
                <TextField label="iva" variant="filled" disabled value="0" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="col-md-4 mt-5"
              >
                <TextField
                  color="primary"
                  label="total"
                  variant="filled"
                  disabled
                  value="0"
                />
              </div>
            </div>
            {/* TOTALES */}

            {/* UTILS */}

            <FormControl className="w-25 mt-4">
              <InputLabel htmlFor="ciudad">Metodo de pago</InputLabel>
              <Select>
                <MenuItem value="Contado">Contado</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-25 mt-4">
              <InputLabel htmlFor="ciudad">Fecha de entrega</InputLabel>
              <Input id="ciudad" name="ciudad" required type="date" />
            </FormControl>
            <FormControl className="w-50 mt-4">
              <InputLabel htmlFor="ciudad">Nota</InputLabel>
              <Input multiline id="ciudad" name="ciudad" required type="text" />
            </FormControl>
            {/* UTILS */}

            <div className="row mt-5 mb-5">
              <div className="col-md-12">
                <FormControl className="w-100">
                  <Button type="submit" variant="contained" color="primary">
                    VENTA
                  </Button>
                </FormControl>
              </div>
              {/* <div className="col-md-6">
                <FormControl className="w-100">
                  <Button variant="contained" color="primary">
                    asdasd
                  </Button>
                </FormControl>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VentasPage;
