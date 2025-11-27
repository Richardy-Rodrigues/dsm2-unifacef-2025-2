import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda do dia</Text>
            <Text>Richardy Gabriel Rodrigues da Costa</Text>
            <Text>Engenharia de Software</Text>

            <View style={styles.areaBotao}>
                <Button
                    title="Meus compromissos"
                    onPress={() => navigation.navigate('Meus compromissos')}
                />
                <Button
                    title="Compromissos do grupo"
                    onPress={() => navigation.navigate('Compromissos do grupo')}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    areaBotao: {
        marginTop: 20,
        gap: 10,
    }
});