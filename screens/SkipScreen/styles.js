import colors from '../../src/themes/Colors';
export default {
  text: {color: colors.abutext_pkbw, fontWeight: 'bold', paddingBottom: 5},
  titles: {
    color: colors.army_pkbw,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: colors.abumuda_pkbw,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  titles_italic: {
    fontStyle: 'italic',
    color: colors.abu_pkbw,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  img_head: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  title_header: {
    marginHorizontal: 50,
    width: 200, //dihardcode karena ingin mengikuti design
    fontSize: 18,
    color: colors.white,
  },
};
