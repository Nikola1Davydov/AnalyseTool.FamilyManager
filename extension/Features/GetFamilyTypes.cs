
using AnalyseTool.FamilyManager.Shared;
using AnalyseTool.Sdk;
using System.ComponentModel;

namespace AnalyseTool.FamilyManager
{
    /// <summary>
    /// Read-only: the types of one family, each with its placed-instance count and non-empty type
    /// parameters. Backs the Family Control detail panel (the side panel next to the 3D viewer).
    /// </summary>
    [RevitCommand(
        Description = "Returns the types of one family (by family id from analysetool.family-manager.GetFamilies), each with its " +
                      "placed-instance count and its non-empty type parameters. Read-only. Cost: scans the " +
                      "instances of that one family.",
        ReadOnly = true,
        InputType = typeof(GetFamilyTypes.Request),
        OutputType = typeof(FamilyTypesResult))]
    internal sealed class GetFamilyTypes : IRevitTask
    {
        public Task<object?> ExecuteAsync(IRevitContext ctx, CancellationToken ct)
        {
            Request? req = ctx.Payload.As<Request>();
            long id = req?.Id ?? 0;

            return ctx.RunInRevitAsync<object?>(app =>
                new FamiliesService().GetFamilyTypes(app.ActiveUIDocument.Document, id));
        }

        internal sealed class Request
        {
            [Description("Revit ElementId (long) of the family, as returned by analysetool.family-manager.GetFamilies.")]
            public long Id { get; set; }
        }
    }
}
