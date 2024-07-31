
import { useState } from "react";
import { ActivityIndicator, Button, ScrollView, Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Spacer from "./reusable_component/Spacer";
import { Dialog, Portal } from "react-native-paper";


export default function StuffCalculatingPage() {
    //Countries
    const [openForCountries, setOpenForCountries] = useState(false);
    const [valueOfCountries, setValueOfCountries] = useState(null);
    const [itemsOfCountries, setItemsOfCountries] = useState([
        { label: 'Indonesia', value: 'id' },
        { label: 'Malaysia', value: 'ml' }
    ]);
    //Countries
    const [openForHarbors, setOpenForHarbors] = useState(false);
    const [valueOfHarbors, setValueOfHarbors] = useState(null);
    const [itemsOfHarbors, setItemsOfHarbors] = useState([
        { label: 'Pelabuhan A', value: 'a' },
        { label: 'Pelabuhan B', value: 'b' }
    ]);

    //Stuffs
    const [openForStuffs, setOpenForStuffs] = useState(false);
    const [valueOfStuffs, setValueOfStuffs] = useState(null);
    const [itemsOfStuffs, setItemsOfStuffs] = useState([
        { label: 'Stuff A', value: 'a' },
        { label: 'Stuff B', value: 'b' }
    ]);
    //Description
    const [description, setDescription] = useState<String>('');
    //Discount
    const [discount, setDiscount] = useState<Number>(0);
    //Price
    const [price, setPrice] = useState<Number>(0);
    //Total
    const [total, setTotal] = useState<Number>(0);
    //Dialog Of Loading
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%', flexDirection: 'column', paddingHorizontal: 15, justifyContent: 'center', alignItems:'center' }}>
            <ScrollView style={{ backgroundColor: 'white', flex: 1 }} contentContainerStyle={{ paddingHorizontal: 15 }} >
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <Text>Negara</Text>
                    <DropDownPicker
                        placeholder="Pilih Negara"
                        open={openForCountries}
                        value={valueOfCountries}
                        items={itemsOfCountries}
                        setOpen={setOpenForCountries}
                        setValue={setValueOfCountries}
                        setItems={setItemsOfCountries}
                        zIndex={3000}
                        listMode="SCROLLVIEW"
                    />
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <Text>Pelabuhan</Text>
                    <DropDownPicker
                        placeholder="Pilih Pelabuhan"
                        open={openForHarbors}
                        value={valueOfHarbors}
                        items={itemsOfHarbors}
                        setOpen={setOpenForHarbors}
                        setValue={setValueOfHarbors}
                        setItems={setItemsOfHarbors}
                        zIndex={2000}
                        listMode="SCROLLVIEW"
                    />
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <Text>Barang</Text>
                    <DropDownPicker
                        placeholder="Pilih Barang"
                        open={openForStuffs}
                        value={valueOfStuffs}
                        items={itemsOfStuffs}
                        setOpen={setOpenForStuffs}
                        setValue={setValueOfStuffs}
                        setItems={setItemsOfStuffs}
                        zIndex={1000}
                        listMode="SCROLLVIEW"
                    />
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <Text>Deskripsi</Text>
                    <TextInput style={{ backgroundColor: 'lightgrey', borderColor: 'black', height: 200, textAlignVertical: 'top', borderWidth: 1, borderRadius: 4, fontSize: 14, fontWeight: '500', paddingHorizontal: 15 }} placeholder="Deskripsi" placeholderTextColor="black" multiline={true} numberOfLines={10} editable={false} contextMenuHidden={true} />
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <Text>Diskon</Text>
                    <TextInput style={{ borderColor: 'black', borderWidth: 1, borderRadius: 4, fontSize: 14, fontWeight: '500', paddingHorizontal: 15 }} placeholder="Input diskon" placeholderTextColor="black" onChangeText={(v) => setDiscount(Number(v))} keyboardType="numeric" />
                </View>
                <Spacer height={10} />
                <View>
                    <Text>Harga</Text>
                    <TextInput style={{ borderColor: 'black', borderWidth: 1, borderRadius: 4, fontSize: 14, fontWeight: '500', paddingHorizontal: 15 }} placeholder="Input harga" placeholderTextColor="black" onChangeText={(v) => setPrice(Number(v))} keyboardType="numeric" />
                </View>
                <Spacer height={10} />
                <Text>Total</Text>
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <TextInput style={{ backgroundColor: 'lightgrey', borderColor: 'black', borderWidth: 1, borderRadius: 4, fontSize: 14, fontWeight: '500', paddingHorizontal: 15 }} placeholder="Total" placeholderTextColor="black" editable={false} contextMenuHidden={true} />
                </View>
            </ScrollView>
                <Dialog visible={visible} onDismiss={hideDialog} style={{height: 120, backgroundColor:'white',justifyContent: 'center', alignItems:'center', margin: 'auto'}}>
                    <Dialog.Content>
                        <ActivityIndicator size="large" style={{margin: 'auto'}}/>
                    </Dialog.Content>
                </Dialog>
        </View>
    );
}