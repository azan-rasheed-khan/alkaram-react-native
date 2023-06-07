import { ScrollView, StyleSheet, View } from "react-native"



const Footer = () => {
    return (
        <ScrollView>
            <View>
                <Text>
                    Azaan
                </Text>
            </View>
        </ScrollView>
    )
}

export default Footer


const styles = StyleSheet.create({
    container : {
        height : 50,
        flexGrow : 1,
        backgroundColor : 'transparent'
    }
})