import { TouchableOpacity, Text } from "react-native";

import { StyledComponent } from "nativewind";

export function Button({ ...rest }) {
  //Esse rest pega todas as props e passar para o componente
  return (
    <StyledComponent component={TouchableOpacity} {...rest}>
      <TouchableOpacity className="h-14 bg-green-500 rounded-md items-center justify-center">
        <Text className="text-white font-bold text-md">Entrar</Text>
      </TouchableOpacity>
    </StyledComponent>
  );
}

//Com o wrapper é possível criar um componente padrão e
//disponibilizar esse componente para ser utilizado e
//customizado de acordo com a necessidade do local onde ele estiver.
