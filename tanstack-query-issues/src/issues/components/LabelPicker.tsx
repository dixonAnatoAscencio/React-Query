import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";




export const LabelPicker = () => {


  const labelsQuery = useQuery({
    queryKey:['labels'],
    queryFn: getLabels,
  })

  if(labelsQuery.isLoading){
    return <div className="flex items-center justify-center">Espere...</div>
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
    {labelsQuery.data?.map(label => (
      <span
        key={label.id}
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white"
        style={{ border: `1px solid #${label.color}` }}
      >
        {label.name}
        Primary
      </span>

    ))}
    </div>
  );
};
