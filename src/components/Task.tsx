import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import commonStyles from '../commonStyles';
import { Icon } from 'react-native-elements';

interface TaskProps{
    description: string,
    estimateAt: any,
    doneAt: any,
}

const Task:React.FC<TaskProps> = ({description, estimateAt, doneAt}) => {
    const getCheckView = (doneAt: Date) => {  
        if(doneAt != null) {
            return <View style={styles.done}>
                 <Icon name='check' size={20}
                    color={commonStyles.colors.secondary} />
            </View>
        } else {   
            return <View style={styles.pending}></View> 
        }
    }

    const anotherStyleOfDescription = (doneAt: Date) => doneAt != null ? {textDecorationLine: 'line-through'} : {};

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(doneAt)}
            </View>
            <View>
            <Text style={[styles.description, anotherStyleOfDescription(doneAt)]}>{description}</Text>
                <Text>{estimateAt + ""}</Text>
                <Text>{doneAt + ""}</Text>
                        </View>
            </View>
    );

};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
    },
    exclude: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10,
    }
})


export default Task;