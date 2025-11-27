// TaskUserScreen.js
import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, SectionList, useWindowDimensions } from 'react-native';
import dados from '../data/dados';

export default function TaskUserScreen() {
    const { width, height } = useWindowDimensions();

    // 👉 Convertendo para o formato correto do SectionList
    const [lista] = useState(
        dados.map(secao => ({
            title: secao.compromissos,
            data: secao.data
        }))
    );

    const renderItem = useCallback(({ item }) => (
        <Text style={styles.item}>
            {item.horario}: {item.descricao}
        </Text>
    ), []);

    const renderSectionHeader = useCallback(({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
    ), []);

    const keyExtractor = useCallback((item) => item.id.toString(), []);

    const containerStyle = useMemo(() => {
        const isWide = width >= 600;
        return [
            styles.container,
            {
                paddingHorizontal: isWide ? 24 : 12,
                paddingTop: isWide ? 20 : 12,
            },
        ];
    }, [width, height]);

    return (
        <View style={containerStyle}>
            <Text style={styles.titulo}>Richardy Gabriel Rodrigues da Costa</Text>
            <Text style={styles.titulo}>Engenharia de Software</Text>


            <SectionList
                sections={lista}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'stretch' },
    titulo: {
        textAlign: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 8,
        backgroundColor: '#eee',
        paddingHorizontal: 8,
        textAlign: 'center',
    },
    item: {
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
});
