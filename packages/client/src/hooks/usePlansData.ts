// import { useSnackBar } from "@/context/SnackBarContext";
// import { getPlans } from "@/services";
// import { MetaData, Plan } from "@/types";
// import { useQuery } from "@tanstack/react-query";
// import { AxiosError } from "axios";

// type Params = {
//   name?: string;
// };

// type Props = {
//   params?: Params;
// };

// const usePlansData = (props: Props) => {
//   const snackBar = useSnackBar();
//   const { params = {} } = props;

//   const {
//     data: plans,
//     error: plansError,
//     isLoading: plansIsLoading,
//   } = useQuery<{ data: Plan[]; metadata: MetaData }, AxiosError<Error>>(
//     ["plans", params],
//     () =>
//       getPlans({
//         params,
//       })
//   );

//   if (plansError) {
//     snackBar.show({
//       message:
//         plansError.response?.data?.message ||
//         "Algo deu errado ao bustar os planos!",
//       type: "error",
//     });
//   }

//   return { plans, plansError, plansIsLoading };
// };

// export default usePlansData;
