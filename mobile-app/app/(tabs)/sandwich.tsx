import { Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router'

export default function Page() {
    return (
        <View>
            <Text>This is a page about sandwhices. </Text>
            <Link href='/pizza' asChild>
                <Pressable>
                    <Text>Pizza</Text>
                </Pressable>
            </Link>
        </View>
    )
}
