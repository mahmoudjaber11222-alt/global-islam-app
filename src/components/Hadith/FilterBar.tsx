import { StyleSheet, View } from 'react-native';
import CategorySelector from '../../components/Hadith/CategorySelector';
import { Colors } from '../../constants/theme';
import { useAppTheme } from '../../context/ThemeProvider';

function FilterBar({ handleCategoryChange, selectedItem, data = [] }) {
  const { theme, isDark } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? `${Colors[theme].surface}40`
            : `${Colors[theme].surface}80`,
          borderColor: isDark
            ? `${Colors[theme].border}30`
            : `${Colors[theme].border}50`,
        },
      ]}
    >
      <CategorySelector
        data={data}

        selected={selectedItem}
        onChange={(key) => handleCategoryChange(key)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    // Note: For sticky behavior in RN, use stickyHeaderIndices on parent
    // ScrollView/FlatList, or place this outside the scroll area.
  },
});

export default FilterBar;
