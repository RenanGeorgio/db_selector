import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { DataTable, Card } from 'react-native-paper';
import { Block, theme } from 'galio-framework';

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
  const [numberOfItemsPerPageList] = useState([2, 3, 4, 200]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
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
      <Block contentContainerStyle={styles.content}>
        <Card>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title
                sortDirection={sortAscending ? 'ascending' : 'descending'}
                onPress={() => setSortAscending(!sortAscending)}
                style={styles.first}
              >
                Nome
              </DataTable.Title>
              <DataTable.Title>Número de contato</DataTable.Title>
              <DataTable.Title>e-mail</DataTable.Title>
              <DataTable.Title>Outras formas de contato</DataTable.Title>
              <DataTable.Title>Produtos</DataTable.Title>
              <DataTable.Title>Localização</DataTable.Title>
              <DataTable.Title numeric>Avaliação</DataTable.Title>
            </DataTable.Header>

            {sortedItems.slice(from, to).map((item) => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell style={styles.first}>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.phone_number}</DataTable.Cell>
                <DataTable.Cell>{item.email}</DataTable.Cell>
                <DataTable.Cell>{item.others_contact_info}</DataTable.Cell>
                <DataTable.Cell>{item.list_products}</DataTable.Cell>
                <DataTable.Cell>{item.locations}</DataTable.Cell>
                <DataTable.Cell numeric>{item.rate}</DataTable.Cell>
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
        </Card>
      </Block>
    </PaperProvider>
  );
};

Fornecedores.title = 'Fornecedores';

const styles = StyleSheet.create({
  content: {
    padding: 8,
  },
  first: {
    flex: 2,
  },
  pagination: {
    marginTop:'10%',
  },
});

export default Fornecedores;