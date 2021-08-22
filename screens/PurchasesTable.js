import React, {useState} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { DataTable, Card, Checkbox } from 'react-native-paper';
import { Block, theme, Text } from 'galio-framework';

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const Fornecedores = () => {
  const [sortAscending, setSortAscending] = useState(false);
  const [page, setPage] = useState(0);
  const [items] = useState([
    {
      key: 1,
      name: 'Cupcake',
      phone_number: '3333333333',
      email: 'contato1@gmail.com',
      others_contact_info: 'outras',
      list_products: 'produto vagabundo',
      locations: 'localizao 1',
      rate: 4,
    },
    {
      key: 2,
      name: 'Eclair',
      phone_number: '33334543333',
      email: 'contato2@gmail.com',
      others_contact_info: 'outras2',
      list_products: 'produto vagabundo2',
      locations: 'localizao 2',
      rate: 5,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      phone_number: '3333300033',
      email: 'contato3@gmail.com',
      others_contact_info: 'outras3',
      list_products: 'produto vagabundo3',
      locations: 'localizao 3',
      rate: 1,
    },
    {
      key: 4,
      name: 'Gingerbread',
      phone_number: '333543333',
      email: 'contato4@gmail.com',
      others_contact_info: 'outras4',
      list_products: 'produto vagabundo4',
      locations: 'localizao 4',
      rate: 9,
    },
    {
      key: 5,
      name: 'Ice cream sandwich',
      phone_number: '33336733',
      email: 'contato5@gmail.com',
      others_contact_info: 'outras5',
      list_products: 'produto vagabundo5',
      locations: 'localizao 5',
      rate: 7,
    },
    {
      key: 6,
      name: 'Jelly Bean',
      phone_number: '333337633',
      email: 'contato6@gmail.com',
      others_contact_info: 'outras6',
      list_products: 'produto vagabundo6',
      locations: 'localizao 6',
      rate: 10,
    },
  ]);
  const [checked, setChecked] = useState({});
  const handleChange = (e, key, next_state) => {
    setChecked({
       ...checked,
      [key]: next_state
    })
  };

  const [numberOfItemsPerPageList] = useState([4, 8, 16, 32]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[1]
  );
  const sortedItems = items
    .slice()
    .sort((item1, item2) =>
      (sortAscending ? item1.name < item2.name : item2.name < item1.name)
        ? 1
        : -1
    );
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <PaperProvider>
      <Block>
        <Block row space="evenly">
          <Block flex left>
            <Button small center color="black" style={styles.optionsButton}>
                <Text color="white">Adicionar</Text>
            </Button>
          </Block>
          <Block flex center>
            <Button small center color="black" style={styles.optionsButton}>
                <Text color="white">Editar</Text>
            </Button>
          </Block>
          <Block flex right>
            <Button small center color="black" style={styles.optionsButton}>
                <Text color="white">Deletar</Text>
            </Button>
          </Block>
        </Block>
      </Block>


      <Block contentContainerStyle={styles.content}>
          <DataTable style={styles.frame}>
            <DataTable.Header style={styles.card_type}>
              <DataTable.Title
                sortDirection={sortAscending ? 'ascending' : 'descending'}
                onPress={() => setSortAscending(!sortAscending)}
                style={styles.first}
              >
                <Text bold flex left>
                 Nome
                </Text>
              </DataTable.Title>
              <DataTable.Title style={styles.labels1}>
              <Text bold>
                Telefone
              </Text>
              </DataTable.Title>
              <DataTable.Title style={styles.labels2}>
              <Text bold>
                e-mail
              </Text>
              </DataTable.Title>
              <DataTable.Title numeric style={styles.last}>
              <Text bold>
                Nota
              </Text>
              </DataTable.Title>
              <DataTable.Title style={styles.checkbox_state}></DataTable.Title>
            </DataTable.Header>

            {sortedItems.slice(from, to).map((item) => (
              <DataTable.Row key={item.key}>
                
                <DataTable.Cell style={styles.first}>{item.name}</DataTable.Cell>
                <DataTable.Cell style={styles.labels1}>{item.phone_number}</DataTable.Cell>
                <DataTable.Cell style={styles.labels2}>{item.email}</DataTable.Cell>
                <DataTable.Cell numeric style={styles.last}>{item.rate}</DataTable.Cell>
                <DataTable.Cell style={styles.checkbox_state_label}>
                
                  <Checkbox
                    style={styles.checkbox_state}
                    onPress={(e) => {
                      let next_state;

                      if((checked[item.key] == 'undefined')||(checked[item.key] == 'checked')){
                        next_state = 'unchecked'
                      }else{
                        next_state = 'checked'
                      }

                      handleChange(e, item.key, next_state);
                      }}
                    status={checked[item.key]}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              style={styles.pagination}
              page={page}
              numberOfPages={Math.ceil(sortedItems.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} de ${sortedItems.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={'Items por pagina'}
            />
          </DataTable>
      </Block>
    </PaperProvider>
  );
};

Fornecedores.title = 'Fornecedores';

const styles = StyleSheet.create({
  content: {
    padding: 8,
  },
  pagination: {
    marginTop:'10%',
  },
  card_type: {
    backgroundColor: "#F5F5A4",
    borderColor: 'gray',
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  frame: {
    backgroundColor: 'white',
  },
  optionsButton: {
    width: width * 0.3,
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  first: {
    flexDirection: "row",
    width: '35%',
    flex: 5,
  },
  checkbox_state_label: {
    width: '5%',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  checkbox_state: {
    width: '5%',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  last: {
    width: '5%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  labels1: {
    width: '25%',
    flex: 4,
  },
  labels2: {
    width: '25%',
    flex: 3,
  },
});

export default Fornecedores;