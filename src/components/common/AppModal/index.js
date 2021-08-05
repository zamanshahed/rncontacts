import React from 'react';
import {Text, View, Modal, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const AppModal = ({
  modalVisible,
  setModalVisible,
  modalTitle,
  modalBody,
  modalFooter,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <ScrollView>
            <View style={styles.modalSecHolder}>
              <View style={styles.headerSec}>
                <Text style={styles.modalTitleText}>
                  {(modalTitle && modalTitle) || 'KONTAXTS!'}
                </Text>
                {/* <Icon style={styles.closeBtn} size={18} name="closecircleo" /> */}
              </View>

              <View style={styles.bodySec}>
                <Text>{(modalBody && modalBody) || 'KONTAXTS - Body'}</Text>
              </View>
              <View style={styles.footerSec}>
                <Text>
                  {(modalFooter && modalFooter) || 'KONTAXTS - Footer'}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
