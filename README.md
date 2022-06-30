# Before you start please 
Refer to data-flow.dio diagram file or the png file (dependency-graph.png).

It shows how Dependency graph created by just use dependency array in useMemo and callbacks

For example if Threshold changed only CountOverThreshold changed.

Another example: if search value changed it will trigger Product change which will trigger ProductWithCoupon change then Min/Max and CountOverThreshold change.

